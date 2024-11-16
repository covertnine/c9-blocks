/**
 * Internal dependencies
 */
import classnames from 'classnames';
import VideoBox from './video-box';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { applyFilters } = wp.hooks;
const { sanitizeUrl } = wp.url;

/**
 * External Dependencies
 */
import DOMPurify from 'dompurify';

const MOBILE_Y_SIZE = {
    0.25: 'top',
    0.5: 'center',
    0.75: 'bottom',
};

const MOBILE_X_SIZE = {
    0.25: 'left',
    0.5: 'center',
    0.75: 'right',
};

const postProcessMobileSize = (value) => {
    let z = value;

    if (0.33 >= value) {
        z = 0.25;
    } else if (0.66 >= value) {
        z = 0.5;
    } else {
        z = 0.75;
    }

    return z;
};

/**
 * Create a Container wrapper Component
 */
export default class Container extends Component {
    constructor() {
        super(...arguments);
    }

    c9SpacingConfig(padding, margin) {
        let classes = [];
        function assignSideClasses(sideClass, level) {
            if (-1 !== level) {
                classes.push(`${sideClass}-${level}`);
            }
        }

        if (
            padding.top === padding.left &&
            padding.top === padding.bottom &&
            padding.top === padding.right &&
            -1 !== padding.top
        ) {
            classes.push(`p-${padding.top}`);
        } else if (padding.top === padding.bottom && 0 <= padding.top) {
            classes.push(`py-${padding.top}`);
            assignSideClasses('pl', padding.left);
            assignSideClasses('pr', padding.right);
        } else if (padding.left === padding.right && 0 <= padding.left) {
            classes.push(`px-${padding.left}`);
            assignSideClasses('pt', padding.top);
            assignSideClasses('pb', padding.bottom);
        } else {
            ['top', 'bottom', 'left', 'right'].forEach((s) =>
                assignSideClasses(`p${s[0]}`, padding[s])
            );
        }

        if (margin.top === margin.bottom && -1 !== margin.top) {
            classes.push(`my-${margin.top}`);
        } else {
            ['top', 'bottom'].forEach((s) => assignSideClasses(`m${s[0]}`, margin[s]));
        }

        return classes;
    }

    c9ContainerStyles(height, hue, opacity) {
        const styles = {};

        if (height) {
            styles.minHeight = `${height}vh`;
        }

        if (hue) {
            styles.backgroundColor = this.hexToRGBA(hue, opacity);
        }

        return styles;
    }

    c9ContainerStylesMobile(allowMobile, bgSize, bgX, bgY) {
        const styles = {};

        if (allowMobile && !bgSize) {
            styles['--mobile-height'] =
                'auto' !== bgX.size ? `${DOMPurify.sanitize(bgX.size)}${DOMPurify.sanitize(bgX.unit)}` : `${DOMPurify.sanitize(bgX.size)}`;
            styles['--mobile-width'] =
                'auto' !== bgY.size ? `${DOMPurify.sanitize(bgY.size)}${DOMPurify.sanitize(bgY.unit)}` : `${DOMPurify.sanitize(bgY.size)}`;
        }

        return styles;
    }

    c9BackgroundStyles(url, size, bgX, bgY, repeat, focalPoint) {
        const styles = {};

        const sanitizedUrl = sanitizeUrl(url);
        if (sanitizedUrl) {
            styles.backgroundImage = `url(${sanitizedUrl})`;
            styles.backgroundRepeat = DOMPurify.sanitize(repeat);
        }

        if (size && size.length > 0) {
            styles.backgroundSize = DOMPurify.sanitize(size);
        } else {
            const horizontal =
                'auto' !== bgX.size ? `${DOMPurify.sanitize(bgX.size)}${DOMPurify.sanitize(bgX.unit)}` : `${DOMPurify.sanitize(bgX.size)}`;
            const vertical =
                'auto' !== bgY.size ? `${DOMPurify.sanitize(bgY.size)}${DOMPurify.sanitize(bgY.unit)}` : `${DOMPurify.sanitize(bgY.size)}`;
            styles.backgroundSize = `${horizontal} ${vertical}`;
        }

        if (focalPoint) {
            styles.backgroundPosition = `${DOMPurify.sanitize(focalPoint.x * 100)}% ${DOMPurify.sanitize(focalPoint.y * 100)}%`;
        }

        return styles;
    }

    c9OverlayStyles(hue, opacity, blend) {
        const styles = {};

        if (hue) {
            styles.backgroundColor = this.hexToRGBA(hue, opacity);
            styles.mixBlendMode = DOMPurify.sanitize(blend);
        }

        return styles;
    }

    hexToRGBA(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const opacity = alpha === 10 ? 1 : `.${alpha}`;
        return `rgba(${DOMPurify.sanitize(r)},${DOMPurify.sanitize(g)},${DOMPurify.sanitize(b)},${DOMPurify.sanitize(opacity)})`;
    }

    render() {
        const {
            attributes: {
                containerImgURL,
                bgImgSize,
                bgImgAttach,
                bgImgRepeat,
                bgCustomX,
                bgCustomY,
                overlayHue,
                containerHue,
                containerOpacity,
                overlayOpacity,
                blendMode,
                containerPadding,
                containerMargin,
                minScreenHeight,
                focalPoint,
                containerVideoURL,
                containerVideoID,
                cannotEmbed,
                overrideMobile,
                focalPointMobile,
                bgImgSizeMobile,
                bgCustomXMobile,
                bgCustomYMobile,
            },
            className = '',
        } = this.props;

        return (
            <div
                className={classnames(
                    applyFilters('c9-blocks.blocks.className', className),
                    this.c9SpacingConfig(containerPadding, containerMargin),
                    bgImgAttach ? 'c9-fixed' : 'c9-scroll',
                    containerImgURL ? 'c9-posts-grid-has-background' : null,
                    (!!containerVideoURL || !!containerVideoID) && !cannotEmbed
                        ? 'c9-posts-grid-has-video'
                        : null
                )}
                style={{
                    ...this.c9ContainerStyles(
                        DOMPurify.sanitize(minScreenHeight),
                        DOMPurify.sanitize(containerHue),
                        DOMPurify.sanitize(containerOpacity)
                    ),
                    ...this.c9ContainerStylesMobile(
                        DOMPurify.sanitize(overrideMobile),
                        DOMPurify.sanitize(bgImgSizeMobile),
                        bgCustomXMobile,
                        bgCustomYMobile
                    ),
                }}
            >
                {this.props.children}
                {!!overlayHue && (
                    <div
                        className="c9-overlay-container"
                        style={this.c9OverlayStyles(
                            DOMPurify.sanitize(overlayHue),
                            DOMPurify.sanitize(overlayOpacity),
                            DOMPurify.sanitize(blendMode)
                        )}
                    />
                )}
                {(!!containerVideoURL || !!containerVideoID) && !cannotEmbed && (
                    <VideoBox {...this.props} />
                )}
                {!!containerImgURL && (
                    <div
                        className={classnames(
                            'c9-image-container',
                            overrideMobile
                                ? `c9-image-mobile-${
                                      MOBILE_Y_SIZE[postProcessMobileSize(focalPointMobile.y)]
                                  }-${MOBILE_X_SIZE[postProcessMobileSize(focalPointMobile.x)]}`
                                : null,
                            'cover' === bgImgSizeMobile ? 'c9-image-mobile-size-cover' : null,
                            'contain' === bgImgSizeMobile
                                ? 'c9-image-mobile-size-contain'
                                : null,
                            !bgImgSizeMobile ? 'c9-image-mobile-size-custom' : null
                        )}
                        style={this.c9BackgroundStyles(
                            containerImgURL,
                            bgImgSize,
                            bgCustomX,
                            bgCustomY,
                            bgImgRepeat,
                            focalPoint
                        )}
                    />
                )}
            </div>
        );
    }
}