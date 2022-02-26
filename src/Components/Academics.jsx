import React from 'react';
import '../Style/Index.css';

export default function Academics(props) {
    let i =[];
    function importAll(r) {
        let images = [];
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); 
        i[index]=index+1;
    });

        return images;
    }

    const images = importAll(require.context('../Images/Academics', false, /\.(png|jpe?g|svg)$/));
    console.log(images);


    return (
        <div>
            {i.map((obj) => {
                return (
                    <img src={images[`p${obj}.jpg`].default} className="image" />
                )
            })}

      
        </div>
    )
}
