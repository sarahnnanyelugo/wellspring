import './_search-bar.scss'


export const SearchBar = () => (
  <div class="main">
  
  <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="Search">
  </div>
  
  <!-- Another variation with a button -->
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Search this blog">
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
  
  <p class="mt-4 text-center"><a href="https://www.gungorbudak.com/blog/2018/12/12/bootstrap-4-search-box-with-search-icon/">See how it's done on my blog</a></p>
  
</div>
  </form>
);
