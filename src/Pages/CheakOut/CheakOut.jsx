import { useLoaderData } from "react-router-dom";

const CheakOut = () => {
    const service = useLoaderData();
    const { title, } = service;
    return (
        <div>
            <h2>services {title}</h2>
            <form className="card-body">
                <div className="gird grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                        </label>
                    </div>
                </div>
                <div className="form-control mt-6">
                    {/* <button >Login</button> */}
                    <input className="btn btn-primary btn-block" type="submit" value="Order confarm" />
                </div>
            </form>
        </div>
    );
};

export default CheakOut;