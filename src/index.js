import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './socialbuttons.css';
import './nav.css';
import './navBar.css';
import App from './App';


let SocialButton = ({ type }) => {
  let className = 'fa ';
  if (type === 'facebook') {
    className += 'fa-facebook';
  } else if (type === 'twitter') {
    className += 'fa-twitter';
  }
  return (
    <a href="#" className={className}></a>
  );
}

let FacebookButton = () => {
  return (
    <SocialButton type="facebook" />
  );
}

let TwitterButton = () => {
  return (
    <SocialButton type="twitter" />
  );
}

let IconBar = ({ orientation }) => {
  let className = 'icon-bar';
  if (orientation === 'vertical') {
    className = 'icon-bar-y';
  };
  return (
    <div className={className}>
      <a className="active" href="#"><i className="fa fa-home"></i></a>
      <a href="#"><i className="fa fa-search"></i></a>
      <a href="#"><i className="fa fa-envelope"></i></a>
      <a href="#"><i className="fa fa-globe"></i></a>
      <a href="#"><i className="fa fa-trash"></i></a>
    </div>
  )
};

// let Navbar = ({items, initialActiveItemId}) => {
//   console.log(initialActiveItemId);
//   return (
//     <div className="navbar">
//       {items.map((items) => (
//         <a href="#" className = {initialActiveItemId === items ? 'active' : ''}>
//           <i className="fa fa-fw">{items}</i>
//           </a>
//       ))}
//       {/* <a className="active" href="#"><i className="fa fa-fw fa-home"></i> Home</a> */}
//     </div>
//   )
// };
// <Navbar items={['Home', 'Search', 'About']} initialActiveItemId="Home" /> 

// let Navbar = ({ items, initialActiveItemId }) => {
//   return (
//     <div className="navbar">
//       {items.map((items) => (
//         <a
//           href="#"
//           className={initialActiveItemId === items ? 'active' : ''}
//           onClick={e => {
//             console.log(e);
//           }}
//           key={items}
//         >
//           <i className="fa fa-fw">{items}</i>
//         </a>
//       ))}
//     </div>
//   )
// };

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.items)
    this.state = {
      ActiveItemId: props.initialActiveItemId,
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="navbar">
        {this.props.items.map((items) => (
          <a
            href="#"
            className={this.state.ActiveItemId === items ? 'active' : ''}
            onClick={() => this.setState({ ActiveItemId: items })}
            key={items}
          >
            <i className="fa fa-fw">{items}</i>
          </a>
        ))}
      </div>
    )
  }
}

class AccountingApp extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      expenses: [{
        id: 1,
        money: '3 руб',
        comment: 'купил еду',
      },
      {
        id: 2,
        money: '1 руб',
        comment: 'купил воды',
      }],
      nextAddMoney: '',
      nextAddComment: '',
    }
  }

  onDelete = (id) => {
    const expenses = this.state.expenses.filter((u) => u.id !== id);

    this.setState({
      expenses,
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <input
          type='text'
          value={this.state.nextAddMoney}
          onChange={(e) => this.setState({ nextAddMoney: e.target.value })}
        ></input>
        <input
          type='text'
          value={this.state.nextAddComment}
          onChange={(e) => this.setState({ nextAddComment: e.target.value })}
        ></input>
        <button
          onClick={() => {
            const expenses = [
              ...this.state.expenses,
              {
                id: Math.round(Math.random() * 10000),
                money: this.state.nextAddMoney,
                comment: this.state.nextAddComment
              }
            ];
            this.setState({
              nextAddMoney: "",
              nextAddComment: "",
              expenses,
            })
          }}
        >Добвить новый расчет</button>
        <div style={{ display: 'flex' }}>
          <div style={{ paddingRight: '30px' }}>
            <p>Количество потраченых денег</p>

              {this.state.expenses.map((item) => (
                <li key={item.id}>{item.money}</li>
              ))}

          </div>
          <div>
            <p>На что потрачены деньги</p>

            {this.state.expenses.map((item) => (
                <li key={item.id}>{item.comment} <button onClick={(e)=>this.onDelete(item.id)}>удалить</button></li>
              ))}

          </div>
        </div>
      </div>
    )
  }
}




let exercise1 = <div>
  <SocialButton type="facebook" />
  <SocialButton type="twitter" />
</div>

let exercise2 = <div>
  <FacebookButton />
  <TwitterButton />
</div>

let exercise3 = <div>
  <IconBar orientation="vertical" />
  <IconBar orientation="horizontal" />
</div>

let exercise4 = <div>
  <Navbar items={['Home', 'Search', 'About']} initialActiveItemId="Search" />
</div>

let exercise5 = <div>
  <AccountingApp />
</div>




ReactDOM.render(exercise5, document.getElementById('root'));

