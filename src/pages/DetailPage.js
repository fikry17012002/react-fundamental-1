import React from 'react';
import { useParams } from 'react-router-dom';
import CatatanDetail from '../components/CatatanDetail';
import { getCatatan } from '../utils/data';
 
function DetailPageWrapper() {
    const { id } = useParams();
    return <DetailPage id={String(id)} />;
}
 
class DetailPage extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      catatan: getCatatan(props.id)
    };
  }
 
  render() {
    if (this.state.catatan === null) {
      return <p>catatan is not found!</p>;
    }
 
    return (
      <section>
        <CatatanDetail {...this.state.catatan} />
      </section>
    );
  }
}
 
export default DetailPageWrapper;