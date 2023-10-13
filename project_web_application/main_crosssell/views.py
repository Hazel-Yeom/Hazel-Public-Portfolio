from django.shortcuts import render

def cross_sell(request):
    return render(request, 'main_crosssell/crosssell.html', {'message': 'ob cross sell model suggestion'})
