


const HomeInfo = () => {
    return (
        <div className="flex justify-center gap-4 mt-4">
        {/* phone contact */}
        <div>
        <div className="w-48 h-24  flex flex-col ">
               
                <div className="card-body items-center bg-purple-600 rounded-lg p-4 w-full ">
                    <h2 className="card-title">PHONE</h2>
                   
                </div>
            </div>
        </div>
        {/* Location contact */}
        <div>
        <div className="w-48 h-24 bg-base-100  flex flex-col ">
               
                <div className="card-body bg-yellow-300 items-center rounded-lg p-4 w-full ">
                    <h2 className="card-title">PHONE</h2>
                   
                </div>
            </div>
        </div>
        {/* Locatking Hous */}
        <div>
        <div className="w-48 h-24 bg-base-100  flex flex-col ">
               
                <div className="card-body bg-red-600 items-center rounded-lg p-4 w-full ">
                    <h2 className="card-title">PHONE</h2>
                   
                </div>
            </div>
        </div>

        <div>
        <div className="w-48 h-24 bg-base-100  flex flex-col ">
               
                <div className="card-body bg-indigo-600 items-center rounded-lg p-4 w-full ">
                    <h2 className="card-title">PHONE</h2>
                   
                </div>
            </div>
        </div>
    </div>
    );
};

export default HomeInfo;