import './_search-bar.scss'


export const SearchBar = () => {
  return (<><div class="main">
  
  
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Search this blog" />
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
  
  
</div></>)
}
