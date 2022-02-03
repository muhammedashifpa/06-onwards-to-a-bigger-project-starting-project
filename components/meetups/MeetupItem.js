import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import Link from 'next/link'
import {useRouter} from 'next/router'


function MeetupItem(props) {
  const {push} = useRouter()
  const showDetailHandler = ()=>{
    console.log('showDetailHandler clicked')
    push('/'+props.id)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
