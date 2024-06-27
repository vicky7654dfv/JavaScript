const Formwithcss =() =>{
    return(
        <div>
            <form>
                <div class="field1">
                    Customer Info
                    <input type="text" placeholder="name" /><br/>
                    <input type="number" placeholder="phonenumber"/><br/>
                    <input type="email" placeholder="Email" /><br/>
                    <textarea placeholder="Shipping address"/><br/>
                </div>
                <button type="submit" id="submitBtn" className="submitBtn">
                    Submit
                </button>
            </form>
            <button className="prevBtn" type="submit">Prev</button>
            <button className="nextBtn" type="submit">Next</button>
        </div>
    )

}
export default Formwithcss;