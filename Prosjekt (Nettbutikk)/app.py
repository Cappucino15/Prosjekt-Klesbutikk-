from flask import Flask, render_template

from database import get_db_connection
 
app = Flask(__name__)
 
@app.route('/')

def index():

    return render_template("Forside.html")
 
@app.route('/about')

def about():
    return render_template("Herre.html")

    

@app.route('/dbtest')

def dbtest():

    try:

        conn = get_db_connection()

        cursor = conn.cursor()

        cursor.execute("SELECT 1;")

        result = cursor.fetchone()

        conn.close()

        return f"Database OK! Resultat: {result}"

    except Exception as e:

        return f"Database FEIL: {e}"
 
if __name__ == "__main__":

    app.run(host="0.0.0.0", port=5000, debug=True)

 

