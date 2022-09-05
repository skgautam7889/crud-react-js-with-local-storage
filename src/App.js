import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const users = [
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
    { id: 1, name: "Suraj", email: "Suraj@gmail.com", contact: 123456 },
  ]
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <span>Home</span>
          </li>
        </ul>
      </nav>
      <div className="container mt-2">
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td>
                    <a className='btn btn-success' >Views</a>&nbsp;
                    <a className='btn btn-primary'>Edit</a>&nbsp;
                    <a className='btn btn-danger' >Delete</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
