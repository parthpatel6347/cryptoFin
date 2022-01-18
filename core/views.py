from django.http.response import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from .models import *
from django.db.models import Sum, F


from .serializers import UserSerializer


# class RegisterView(APIView):
#     def post(self, request):
#         serializer = UserSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)


def get_user_wallet(request):

    userid = request.GET.get("user")
    user = User.objects.get(id=userid)

    res_coins = []

    userTransactions = Transaction.objects.filter(user=user)

    userCoins = userTransactions.values_list("symbol", flat=True).distinct()

    for coin in userCoins:

        # Find coin holding qty
        buy_qty = userTransactions.filter(symbol=coin, type="buy").aggregate(Sum("qty"))
        sell_qty = userTransactions.filter(symbol=coin, type="sell").aggregate(
            Sum("qty")
        )

        if not sell_qty["qty__sum"]:
            holding_qty = buy_qty["qty__sum"]
        else:
            holding_qty = buy_qty["qty__sum"] - sell_qty["qty__sum"]

        # find coin average buy price
        buy_trx = userTransactions.filter(symbol=coin, type="buy").annotate(
            total_price=F("qty") * F("price")
        )
        sell_trx = userTransactions.filter(symbol=coin, type="sell").annotate(
            total_price=F("qty") * F("price")
        )

        coin_buy_total = buy_trx.aggregate(Sum("total_price"))
        coin_sell_total = sell_trx.aggregate(Sum("total_price"))

        total_buy_cost = coin_buy_total["total_price__sum"]
        total_sell_cost = coin_sell_total["total_price__sum"]

        if not total_sell_cost:
            avg_cost = total_buy_cost / holding_qty
        else:
            avg_cost = (total_buy_cost - total_sell_cost) / holding_qty

        coinData = {
            "symbol": coin,
            "holding_qty": holding_qty,
            "avg_cost": round(avg_cost, 2),
        }

        res_coins.append(coinData)

    return JsonResponse(res_coins, safe=False)
