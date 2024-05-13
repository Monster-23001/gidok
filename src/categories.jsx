function Categories() {
  return (
    <>
      <div className="category-body">
        <div className="category-head">Browse From Top Categories</div>
        <div className="borders">
          <div className="border-1"></div>
          <div className="border-2"></div>
        </div>
        <div className="categories">
        <div className="category-1">
          <i className="fa-solid fa-thumbs-up" id="icon-1"></i> Holiday Rentals
        </div>
        <div className="category-1">
          <i className="fa-solid fa-house" id="icon-2"></i>Residential Space
        </div>
        <div className="category-1">
          <i className="fa-solid fa-calendar-days" id="icon-3"></i>Event Spaces
        </div>
        <div className="category-1">
          <i className="fa-solid fa-dollar-sign" id="icon-4"></i>Commercial
          Properties
        </div>
        <div className="category-1">
          <i className="fa-solid fa-ellipsis" id="icon-5"></i>More
        </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
