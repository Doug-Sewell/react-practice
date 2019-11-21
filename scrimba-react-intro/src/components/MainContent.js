import React from 'react';

    function MainContent() {
        return(
            <form>
                <input type="checkbox" id="first-option" /> <label for="first-option">Option 1</label><br />
                <input type="checkbox" id="second-option" /> <label for="second-option">Option 2</label><br />
                <input type="checkbox" id="third-option" /> <label fore="third-option">Option 3</label>
            </form>
        )
    }

export default MainContent;