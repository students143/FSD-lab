from django.shortcuts import render

def home(request):
    return render(request, 'home.html')


def profile(request):
    if request.method == "POST":
        data = {
            'name': request.POST.get('name'),
            'email': request.POST.get('email'),
            'city': request.POST.get('city'),
            'profession': request.POST.get('profession'),
        }
        return render(request, 'profile.html', data)

    return render(request, 'profile.html')