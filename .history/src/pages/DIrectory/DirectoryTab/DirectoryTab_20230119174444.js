import "./_directory-tab.scss"




export const DirectoryTab =()=>{
    return(<>
    
 <div class="container">

  <div class="demo-section">
    <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
  </div>

  <div class="tab-wrap">

    <!-- active tab on page load gets checked attribute -->
    <input type="radio" id="tab1" name="tabGroup1" class="tab" checked>
    <label for="tab1">Short</label>

    <input type="radio" id="tab2" name="tabGroup1" class="tab">
    <label for="tab2">Medium</label>

    <input type="radio" id="tab3" name="tabGroup1" class="tab">
    <label for="tab3">Long</label>

    <div class="tab__content">
      <h3>Short Section</h3>
      <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
    </div>

    <div class="tab__content">
      <h3>Medium Section</h3>
      <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

      <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p>
    </div>

    <div class="tab__content">
      <h3>Long Section</h3>
      <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

      <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p>

      <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

      <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p>
    </div>

  </div>

  <div class="demo-section">
    <p>Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Phasellus volutpat, metus eget
      egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Praesent nec nisl a purus blandit viverra. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

    <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p>
  </div>

  <div class="tab-wrap">

    <input type="radio" id="tab4" name="tabGroup2" class="tab" checked>
    <label for="tab4">Apples</label>

    <input type="radio" id="tab5" name="tabGroup2" class="tab" />
    <label for="tab5">Oranges</label>

    <input type="radio" id="tab6" name="tabGroup2" class="tab" />
    <label for="tab6">Bananas</label>

    <input type="radio" id="tab7" name="tabGroup2" class="tab">
    <label for="tab7">Kiwis</label>

    <input type="radio" id="tab8" name="tabGroup2" class="tab">
    <label for="tab8">Tomatos</label>

    <div class="tab__content">
      <h3>Apples</h3>
      <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
    </div>

    <div class="tab__content">
      <h3>Oranges</h3>
      <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

      <p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p>
    </div>

    <div class="tab__content">
      <h3>Bananas</h3>
      <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
    </div>

    <div class="tab__content">
      <h3>Kiwis</h3>
      <p>Praesent nonummy mi in odio.</p>
    </div>

    <div class="tab__content">
      <h3>Tomatos</h3>
      <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum.</p>
    </div>

  </div>

  <div class="demo-section">
    <p>Etiam ut purus enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Morbi mattis ullamcorper velit. Pellentesque posuere. Etiam ut purus mattis mauris sodales aliquam. Praesent nec nisl a purus blandit viverra.</p>

    <p>Praesent nonummy mi in odio. Nullam accumsan lorem in dui. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Nullam accumsan lorem in dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
  </div>

</div>
    
    
    
    </>)
}