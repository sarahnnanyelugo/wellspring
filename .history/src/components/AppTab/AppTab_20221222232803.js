import './_app-tab.scss'



export const AppTab=()=>{
    return (
      <>
        <div className="tab-container">
          <h1>Tabby Tabs</h1>

          <div className="tabs col-md-12">
            <div className="tabby-tab">
              <input type="radio" id="tab-1" name="tabby-tabs" checked />
              <label for="tab-1" className="col-md-8 btn1">
                Student Life
              </label>
              <div className="tabby-content col-md-12">
                <img src="http://i64.tinypic.com/20qrlc.png" />
                <h3>
                  Student Life Admissions Student life at Wellspring College is
                  a rich and vibrant experience.
                </h3>
                <p>
                  Striving to provide a well balanced spiritual, academic and
                  social well-being, students are encouraged to both serve and
                  participate in and beyond our community. With plenty of room
                  for opportunity, students can engage in over forty sports, the
                  arts, and equally many student driven clubs.
                </p>
              </div>
            </div>

            <div className="tabby-tab">
              <input type="radio" id="tab-2" name="tabby-tabs" />
              <label for="tab-2" className="col-md-8">
                Admissions
              </label>
              <div className="tabby-content">
                <img src="http://i63.tinypic.com/wtykg4.png" />
                <p>
                  Cats go for world domination if it fits, i sits, meowwww but
                  claw drapes, or sleep in the bathroom sink. Missing until
                  dinner time under the bed, or eat from dog's food hide from
                  vacuum cleaner kick up litter but lie on your belly and purr
                  when you are asleep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}