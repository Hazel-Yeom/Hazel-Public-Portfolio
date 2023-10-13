from django.shortcuts import render

# Create your views here.

# def bi_home(request):
#     # 뷰의 로직을 작성하고 원하는 템플릿을 렌더링합니다.
#     return render(request, 'main_business_insight/bi_home.html')
#     # return render(request, 'templates/base.html')


# from django.shortcuts import render

# def ds_home(request):
#     return render(request, 'main_business_insight/divedeep.html')


def ds_home(request):
    return render(request, 'divedeep.html')

# def ds_home(request):
#     return render(request, 'base.html')

# def ani_mountain(request):
#     return render(request, 'divedeep.html')

