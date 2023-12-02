import React, { useEffect, useState } from "react";
import "./loading.scss";
import { ProgressBar, Triangle } from "react-loader-spinner";

function Loading() {
    return (
        <main>
            <div className="loaderContainer">
                <div>
                    {/* <ProgressBar
                        height="80"
                        width="80"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="progress-bar-wrapper"
                        borderColor="#012f63"
                        barColor="blue"
                    /> */}

                    <Triangle
                        height="80"
                        width="80"
                        color="#0b7d57"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </div>
                <div className="fix-box">
                    <div className="loading-khela-hobe">
                        <p>Loading . . .</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Loading;
