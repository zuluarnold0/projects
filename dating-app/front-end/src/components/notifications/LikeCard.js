import React from 'react';
import { Link } from 'react-router-dom';

class LikeCard extends React.Component {
    handleView = () => {
        fetch('http://localhost:3000/view', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                viewer: this.props.user.email,
                viewed: this.props.like.email
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        const { like } = this.props;
        return (
            <div>
                <Link to={`/user/${like.id}`} onClick={this.handleView}>
                <div className="history__container">
                    <div className="history__img">
                        <img src={like.photourl} alt="img"/>
                    </div>
                    <div className="history__content">
                        <span className="history__name">{ like.firstname[0].toUpperCase() + like.firstname.slice(1)} { like.lastname[0].toUpperCase() + like.lastname.slice(1) } </span>
                        <span className="history__msg">Liked your profile</span>
                        <br/>
                    </div>
                </div>
            </Link>
        </div>
        )
    }
}

export default LikeCard;
