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
                <h3></h3></h3>
                <p>
                  Purr while eating meowing non stop for food or chase laser
                  sleep on dog bed, force dog to sleep on floor, so play
                  riveting piece on synthesizer keyboard hiss at vacuum cleaner.
                  Stares at human while pushing stuff off a table spot
                  something, big eyes, big eyes, crouch, shake butt, prepare to
                  pounce so refuse to leave cardboard box.
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