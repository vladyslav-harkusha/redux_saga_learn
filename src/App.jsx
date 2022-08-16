import { useDispatch, useSelector } from 'react-redux';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.countReducer.count);
  const users = useSelector(state => state.userReducer.users);

  return (
    <div className="app">
      <div className="buttons">
        <p className="buttons__count">{count}</p>

        <div className="buttons__container">
          <button className="buttons__button">Increment ++</button>
          <button className="buttons__button">Decrement --</button>
          <button className="buttons__button">Get Users</button>
        </div>
      </div>

      <div className="users">
        <div className="users__list">
          {users.map((user, index) =>
            <div key={index} className="users__item">
              {user.name}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
