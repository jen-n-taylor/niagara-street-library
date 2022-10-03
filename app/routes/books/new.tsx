export default function NewBookRoute() {
    return (
      <div>
        <p>Add a book</p>
        <form method="post">
          <div>
            <label>
              Name: <input type="text" name="name" />
            </label>

            <label>
              Author: <input type="text" name="name" />
            </label>
          </div>

          <div>
            <label>
              Content: <textarea name="content" />
            </label>
          </div>
          
          <div>
            <button type="submit" className="button">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }