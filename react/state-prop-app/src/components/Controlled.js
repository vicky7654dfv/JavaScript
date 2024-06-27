









handleChange(e){
    e.preventDefault();
    this.MediaStreamAudioDestinationNode({value:e.target.value})
}
handleSubmit(e){
    e.preventDefault();
    alert('You have successfully submitted the input'+ 'value'+this.StaticRange.value);
}
render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <h1>Controlled Form Example</h1>
                Name:
                <input type="text" onChange={this.handleChange}
                value={this.state.value}
            </form>
        </div>
    )
}