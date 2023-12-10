/*import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;*/

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Tab3.css';

const Tab3: React.FC = () => {
  // dataset state variable to hold JSON data from WP
  // to meet Ionic's requirement for typescript data types
  // set type to <any[]> on next line
  const [dataset, setDataset] = useState<any[]>([]);
  // URL for WP JSON REST endpoint
  const dataURL = "https://dev-simonikcs55-13.pantheonsite.io/wp-json/twentytwentyone-child/v1/books";
  // useEffect() to get JSON data and populate dataset state variable
  useEffect(() => {
    fetch(dataURL) // fetch() to load raw json string
    .then(response => response.json()) // json() to convert raw string to json object
    .then(data => setDataset(data)) // react state set function to populate data state var
  },[])
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Books</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Books</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* use map() to loop through JSON array returned from WP */}
        <IonList id="book-list">
          <IonListHeader>Books</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>{item.post_title}</h4>
                <h4>{item.book_title}</h4>
                <img src={item.guid} />
                <p>{item.book_description}</p>
                <p>{item.book_genre}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
