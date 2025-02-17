import { lazy, Suspense } from "react";
import { PrivateRoute } from "../Utils/RouteGaurd";

export function lazyLoadRoutes(componentName, isPrivate = false) {
    const LazyElement = lazy(() => import(`../Pages/${componentName}.jsx`));

    return (
        <Suspense
            fallback={
                <div id="preloader" className="preloader-spinner">
                    <div id="status">
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div>
            }
        >
            {isPrivate ? <PrivateRoute componentName={componentName}>
                <LazyElement />
            </PrivateRoute> : <LazyElement />}
        </Suspense>
    );
}
