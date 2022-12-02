import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CatatanList from '../components/CatatanList';
import SearchBar from '../components/SearchBar';
import { deleteCatatan, getCatatans } from '../utils/data';
 
function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }
   
    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  }

class HomePage extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      catatans: getCatatans(),
      keyword: props.defaultKeyword || '',
    }
 
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }
 
  onDeleteHandler(id) {
    deleteCatatan(id);
 
    this.setState(() => {
      return {
        catatans: getCatatans(),
      }
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });

    this.props.keywordChange(keyword);
  }
 
  render() {
    const catatans = this.state.catatans.filter((catatan) => {
        return catatan.name.toLowerCase().includes(
          this.state.keyword.toLowerCase()
        );
      });

    return (
      <section>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <h2>Daftar Catatan</h2>
        <CatatanList catatans={catatans} onDelete={this.onDeleteHandler} />
      </section>
    )
  }
}
 
export default HomePageWrapper;