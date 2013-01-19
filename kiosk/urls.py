from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('app.views',
    # Examples:
    # url(r'^$', 'kiosk.views.home', name='home'),
    # url(r'^kiosk/', include('kiosk.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^$','index' ),
    url(r'^two/$', 'two'),
    url(r'^mobile/$', 'mobile')
)



# from django.conf import settings

# urlpatterns += patterns((r'^static/(?P<path>.*)$', 
#     'django.views.static.serve', {'document_root': settings.STATIC_ROOT}),


# ... the rest of your URLconf goes here ...

urlpatterns += staticfiles_urlpatterns()
