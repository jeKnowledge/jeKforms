from django.db import models

#dei o nome de Post porque não tinha a certeza de qual o nome certo a dar 
class Forms_Bio(models.Model):
    forms_name = models.CharField(max_length=100)
    forms_admin = models.CharField(max_length=100)
    #not finished:
    date_limit = models.DateField()
    #link field
    forms_url = models.URLField()


    def __str__(self):
        return self.forms_name