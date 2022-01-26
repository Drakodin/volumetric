# volumetric
A quick and easy template that connects a TS React UI to a simple Flask server.

Yes, the name is a name of a type of chemistry glassware. What do you do with it? You may run REACTions inside the volumetric FLASK.

...I'll see myself out...

## Loading the venv
Flask runs in a virtual environment, a shell over your Python distribution with only a set amount of packages.

Setting up your venv is easy. To do so, simply type:
```
python -m venv {name_of_venv}
```
You can name your venv anything you want, but to keep it simple, naming it `venv` is fine too.

### Setting up imports
In the server directory, there is a `requirements.txt`. This file contains all of the versions of the modules that are required. If there are any I missed, you can install those manually.

Venvs are shipped with a version of `pip` that matches the distribution of Python you have. A file called `pyvenv.cfg` will be generated to point at the distribution that generated it. For example, I use Anaconda with Python 3.8.8 so my env generated looks like
```
home = {Path_to_Anaconda}
include-site-packages = false
version = 3.8.8
```

### Activating the venv
Virtual Environments have their own packages that are usually not in your global Python pip store. Thus, you need to "activate" your environment. This can be done by calling the activate script from the directory of your Flask server file.

The script for activation is under `/Scripts/`. Then, inside this, you can run your main server file.