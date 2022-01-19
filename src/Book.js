import React from "react";
const Book = (props) => {

  //for html attribute eventhandler i,e onClick,onMouse 

  const clickHandler = () =>{
    alert("hello world");
  }

  const complexExample = (author) =>{
    alert(author);
  }
  console.log(props);
  const { img, title, author } = props;
  
  return (
    <article className="book">
      <img src={img} />
      <p>
        <b>Author:</b>
        {author}
      </p>
      <div onClick={()=> alert(title)}>
        <b>Title:</b>
        {title}
      </div>
      <button type="button" onClick={clickHandler}>Button Reference</button>
      <button type="button" onClick={() =>complexExample(author)}>More Complex</button>
      <br></br>
    </article>
  );
};

export default Book