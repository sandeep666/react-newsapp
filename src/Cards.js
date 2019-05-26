import React from 'react';
import { Container, Jumbotron, Col, Row, Card, CardTitle, CardText, Button } from 'reactstrap';
import NavBar from './NavBar';
import axios from 'axios'


export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
      title: '',
      urlToImage: '',
      description: ''
    };
  }

  componentDidMount() {
    //console.log(this.props.data)
    this.setState({
      title: this.props.data.title,
      description: this.props.data.description,
      urlToImage: this.props.data.urlToImage,
      content: this.props.data.content,
      url : this.props.data.url
    })
  }
  

  render() {

    return (
      <Card body style={{ height: '300px' }}
        onPointerEnter={() => this.setState({ showText: false })}
        onPointerLeave={() => this.setState({ showText: true })}>
        {this.state.showText ?
          <div>
            <CardTitle style={{ fontSize: 24, fontWeight: 'bold' }}>
              {this.state.title.length > 50 ? this.state.title.slice(0, 50) + "..." : this.state.title}
            </CardTitle>
            <img style={{ width: 222, height: 102 }} src={this.state.urlToImage} alt="News" />
            <CardText style={{ fontSize: 12 }}>{this.state.description}</CardText> </div> :
          <div>
            <CardTitle style={{ fontSize: 12, }}>
              {this.state.content}
            </CardTitle>
            <Button onClick={()=> window.open(this.state.url)} color="primary" size="sm">View Link</Button>{' '}
          </div>}
      </Card>
    );
  }
}
