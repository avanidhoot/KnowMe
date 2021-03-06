class Github extends React.Component{ 

    constructor(props, context) {
        super(props, context);
        this.state = { next_page: props.page};
    };


    render() { 
        return (
            <section className="bg-grey">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-6 col-lg-6 signup-cont text-center">

                            <h5>Connect your github account to fetch your Repositories</h5>

                            <div className="margin-tb30">
                                <a href="/auth/github" className="btn btn-dark social-btn-type git-btn" >
                                        <span className="fab fa-github"></span>  Connect your Github</a>
                                <a href={this.state.next_page} className="skip-btn">Skip</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ) 
    } 
}

class StackExchange extends React.Component{ 

    constructor(props, context) {
        super(props, context);
        this.state = { next_page: props.page};
    };


    render() { 
        return (
            <section className="bg-grey">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-6 col-lg-6 signup-cont text-center">

                            <h5>Connect your stackoverflow account to fetch your Reputations</h5>

                            <div className="margin-tb30">
                                <a href="/auth/stackexchange" className="btn btn-warning stack-btn social-btn-type" >
                                <span className="fab fa-stack-overflow"></span>  Connect with StackOverflow</a>
                             
                                <a href={this.state.next_page} className="skip-btn">Skip</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ) 
    } 
}

class Facebook extends React.Component{ 

    constructor(props, context) {
        super(props, context);
        this.state = { next_page: props.page};
    };


    render() { 
        return (
            <section className="bg-grey">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-6 col-lg-6 signup-cont text-center">

                            <h5>Connect your facebook account to fetch your Personal detail, Work Experience, Education.</h5>

                            <div className="margin-tb30">
                                <a href="/auth/facebook" className="btn btn-primary fb-btn social-btn-type" >
                                <span className="fab fa-facebook-f"></span>  Connect your Facebook</a>
                             
                                <a href={this.state.next_page} className="skip-btn">Skip</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        ) 
    } 
}