import type React from 'react';
import classNames from 'classnames';
import { ProductItem } from '../product-item/product-item';
import logoURL from '../../assets/cafe.svg';
import styles from './landing-page.module.scss';

export interface LandingPageProps {
    videoURL?: string;
    posterURL?: string;
    children?: React.ReactNode;
    className?: string;
}

/**
 * This Landing Page component is a simple demo component to showcase the capabilities of Codux,
 * it is a basic implementation, which is not meant to be utilized in a production environment.
 *
 * Use this demo to get a feel for how easy and fun it is to create and edit components in Codux using Blueprint.js, a 3rd party React-based UI toolkit.
 *
 */
export const LandingPage = ({
    children,
    className,
    videoURL = 'https://video.wixstatic.com/video/68d3a9_d6f59c533b0e49cf8e44e6ff23ace28a/1080p/mp4/file.mp4',
    posterURL = 'https://static.wixstatic.com/media/68d3a9_d6f59c533b0e49cf8e44e6ff23ace28af000.jpg',
}: LandingPageProps) => {
    const title = 'Coffee for thought';
    const subTitle =
        'Alaskan made. Santa approved. The best grain, the finest roast, the most powerful flavor.';

    return (
        <div className={classNames(styles.page, className)}>
            <div className={styles.videoBG}>
                <video
                    className={styles.vContent}
                    poster={posterURL}
                    autoPlay
                    muted
                    loop
                    preload="auto"
                >
                    <source src={videoURL} type="video/mp4" />
                </video>
            </div>
            <div className={styles.content}>
                <div className={styles.cols}>
                    <img className={styles.logo} src={logoURL} alt="" />
                    <p className={styles.title}>{title}</p>
                    <p className={styles.subtitle}> {subTitle}</p>
                </div>
                <ProductItem />
            </div>
            <div className={styles.content}>{children}</div>
            <div className={styles.divider}>
                <svg viewBox="0 0 300 200" width="100%" height="100%" preserveAspectRatio="none">
                    <path d="M 0,200 C 0,200 300,200 300,0 L 300,200 z"></path>
                </svg>
            </div>
        </div>
    );
};
