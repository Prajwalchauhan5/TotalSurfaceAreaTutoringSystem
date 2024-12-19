from flask import Flask, request, render_template, redirect, url_for
from owlready2 import get_ontology, Thing, DatatypeProperty
 
app = Flask(__name__)
 
# Load the ontology
ontology_path = "student_ontology.owl"
onto = get_ontology(ontology_path).load()
 
# Define the Student class if it doesn't already exist
with onto:
    class Student(Thing):
        pass
 
    class name(DatatypeProperty):
        domain = [Student]
        range = [str]
 
# HTML form template
form_template = """
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Student Form</title>
</head>
<body>
<h1>Input Student Name</h1>
<form method="POST">
<label for="student_name">Student Name:</label>
<input type="text" id="student_name" name="student_name" required>
<button type="submit">Submit</button>
</form>
<h2>Existing Students</h2>
<ul>
        {% for student in students %}
<li>{{ student.name }}</li>
        {% endfor %}
</ul>
</body>
</html>
"""
 
@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # Add new student to the ontology
        student_name = request.form.get("userName").strip()
        if student_name:
            with onto:
                new_student = Student()
                new_student.name = student_name
            onto.save(file=ontology_path, format="rdfxml")
            return redirect(url_for("introduction"))
 
    # Fetch all students
    students = list(onto.Student.instances())
    return render_template("index.html", students=students)


@app.route("/introduction")
def introduction():
    return render_template("introduction.html")


@app.route("/learn")
def learn():
    return render_template("learn.html")


@app.route("/calculate")
def calculate():
    return render_template("calculate.html")


@app.route("/practice")
def practice():
    return render_template("practice.html")
if __name__ == "__main__":
    app.run(debug=True)