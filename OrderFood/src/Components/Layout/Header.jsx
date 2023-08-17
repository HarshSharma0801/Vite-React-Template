const Header = props=>{
return (
    <>
 <header className={classes.header}>
   <h1>ReactMeals</h1>
   <button>Cart</button>
 </header>
 <div className={classes['main-image']}>  
    <img src={MealsImage}/>
 </div>
    </>
 
)
}

export default Header