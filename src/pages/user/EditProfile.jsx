export default function EditProfile() {
    return (
        <div className="container mt-lg-5 mt-3">
            <div className="row align-items-start">
                <div className="col-lg-4 p-0 shadow">
                    <div className="author-card pb-0 pb-md-3">
                        <div className="author-card-cover"></div>
                        <div className="author-card-profile row">
                            <div className="author-card-avatar col-md-5">
                                <img src="" alt="userprofileimage"/>

                            </div>
                            <div className="author-card-details col-md-7">
                                <h5 className="author-card-name mb=2">
                                    <strong>username</strong>
                                </h5>
                                <span className="author-card-position">
                                    <>Joined date</>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="wizard pt-3">
                        <div className="d-flex align-items-start">
                            <div className="nav align-items-start flex-column col-12 nav-pills me-3"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <button className="nav-link active">
                                oke
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}