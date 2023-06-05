from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    """
    Home page
    """
    return render_template('home.html')

@app.route('/Projects')
def master_class():
    """
    Master_class page
    """
    return render_template('projects.html')

@app.route('/Blogs')
def blogs():
    """
    Blogs page
    """
    return render_template('blogs.html')

@app.route('/Development')
def development():
    """
    Development page
    """
    return render_template('development.html')

@app.route('/About')
def about():
    """
    About page
    """
    return render_template('about.html')


if __name__ == "__main__":
    # app.run(debug=True, host="127.0.0.1", port=7070)
    app.run(debug=True, host="192.168.1.14", port=7077)

    