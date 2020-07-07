# WINO, a Python Django API and React app - GA Project Four

My final dev project for the Software Engineering Immersive course, a complex full-stack application built with Django REST Framework and React.

WINO is a Yelp-style social review site aimed for natural wine lovers, where users can write and read reviews of natural wines and learn more about the producers behind their favourite bottles. 

The app has been deployed with Heroku and is available [here](http://winoaino.herokuapp.com/).

## Brief & Timeframe:

* Build a full-stack application by making your own backend and your own front-end
* Use a Python Django API using Django REST Framework to serve your data from a Postgres database
* Consume your API with a separate front-end built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
* Have a visually impressive design
* Be deployed online so it's publicly accessible
* Write your code DRY and build your APIs RESTful.
* Timeframe: 8 days

## Technologies Used:

* Django
* Django REST Framework
* Postgres
* SQL
* PyJWT
* JavaScript (ES6)
* React.js
* HTML, CSS, Sass
* Axios
* Git + GitHub
* react-notify-toast
* react-router-dom
* react-select

## Demonstration of the App Flow

### Functionality 

The functionality is not too different from other social review sites. Users can:

* Register & login
* View a curated feed of natural wine producers
* View a show-page of a producer
* View a curated feed of natural wines
* View a show-page of a wine
* Post, edit and delete reviews on natural wines

## Process

### Styling

I wanted to challenge myself with the styling, so I decided to style everything completely from scratch without any CSS frameworks. In an attempt to make the site appear clean but with a hip flare, I opted for a B&W scheme with a colour pop of pastel pink, and a few font options.

### Featured piece of code

In order to send the right information to the frontend, in this serialiser I'm populating my WineSerializer with data from different models with different SQL relationships - One-to-One (producer), Many-To-Many (styles) and One-To-Many (reviews). 

```python
from rest_framework import serializers
from .models import Wine
from winemakers.models import Winemaker 
from styles.serializers import StyleSerializer
from reviews.serializers import PopulatedReviewSerializer

class WineSerializer(serializers.ModelSerializer):

    class Meta:
        model = Wine
        fields = '__all__'

class ProducerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Winemaker
        fields = ('id', 'name', 'country', 'region')

class PopulatedWineSerializer(WineSerializer):
    producer = ProducerSerializer()
    style = StyleSerializer(many=True)
    reviews = PopulatedReviewSerializer(many=True)
```

### Known bugs or errors

* The navigation menu does not close on re-render
* Error handling for forms is not quite there yet

### Wins and Blockers

Working out the SQL database relationships was a bit of a hurdle. Having previously worked with NoSQL databases only, I found it difficult to populate my serialisers in the right way to be able to send relevant data to the frontend, when some models had One-To-Many and Many-To-Many relationships simultaneously.

I'm very pleased with the seeds file I created to populate the app with some real-life data from the natural wine world. I also took this project as an opportunity to stretch my frontend developer muscles and set myself the ambitious goal to make pixel-perfect design, so having it turn out quite nice and slick was rewarding.

## Future Features

Some added functionality I would have liked to add if I had more time: 

* Search functionality with the ability to filter wines or producers by region, wine style etc.
* Users could like their favourite wines
* Maps to show geographical locations for different producers 

## Key learnings

Going solo for the final project was definitely both a blessing and a curse, as it meant me miss out on some of the perks of collaborative work, such as bouncing ideas off team mates and sorting out any hurdles much sooner. On the flip side I'm happy that I decided to trust my ability to build a full-stack app on my own, as all the challenges I faced and was able to overcome in this project helped boost my confidence as a developer.

A big learning experience for me had to do with managing my own workload. I'm afraid I was overly confident about the time and effort that goes into building a full-stack app, and in a state of uninformed optimism, kept on adding new models to the backend to the point where I just couldn't build my frontend fast enough to display all the features. In the end, the project would have been big enough to keep a team of 3 developers well busy. I decided not to worry about this too much though, and instead focused on finishing what I could with the time that I had.