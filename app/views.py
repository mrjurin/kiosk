# Create your views here.
from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render_to_response


def index(request):
	return render_to_response("index.html")


def two(request):
	return render_to_response("two.html")

def mobile(request):
	return render_to_response ("mobile.html")