import { css } from "@emotion/react";
import { FC, ReactNode } from "react";

export type FirstViewProps = {
  imagePath: string;
  imagePathSp: string;
  alt: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  shrinkTitle?: boolean;
  shrinkTitleSp?: boolean;
  titleWidthOnShrinkPercent?: number;
  titleWidthOnShrinkPercentSp?: number;
  titleMarginTop?: number;
  titleMarginBottom?: number;
  titleMarginLeft?: number;
  titleMarginRight?: number;
  titleMargin?: string;
  titleMarginTopTablet?: number;
  titleMarginBottomTablet?: number;
  titleMarginLeftTablet?: number;
  titleMarginRightTablet?: number;
  titleMarginTablet?: string;
  titleMarginTopSp?: number;
  titleMarginBottomSp?: number;
  titleMarginLeftSp?: number;
  titleMarginRightSp?: number;
  titleMarginSp?: string;
  titleMarginTopSpSm?: number;
  titleMarginBottomSpSm?: number;
  titleMarginLeftSpSm?: number;
  titleMarginRightSpSm?: number;
  titleMarginSpSm?: string;
  shrinkDescription?: boolean;
  shrinkDescriptionSp?: boolean;
  descriptionWidthOnShrinkPercent?: number;
  descriptionWidthOnShrinkPercentSp?: number;
  descriptionFontSize?: number;
  descriptionMarginTop?: number;
  descriptionMarginBottom?: number;
  descriptionMarginLeft?: number;
  descriptionMarginRight?: number;
  descriptionMargin?: string;
  descriptionMarginTopTablet?: number;
  descriptionMarginBottomTablet?: number;
  descriptionMarginLeftTablet?: number;
  descriptionMarginRightTablet?: number;
  descriptionMarginTablet?: string;
  descriptionMarginTopSp?: number;
  descriptionMarginBottomSp?: number;
  descriptionMarginLeftSp?: number;
  descriptionMarginRightSp?: number;
  descriptionMarginSp?: string;
  descriptionMarginTopSpSm?: number;
  descriptionMarginBottomSpSm?: number;
  descriptionMarginLeftSpSm?: number;
  descriptionMarginRightSpSm?: number;
  descriptionMarginSpSm?: string;
};

export const FirstView: FC<FirstViewProps> = (props) => {
  const { imagePath, imagePathSp, alt, title, description, shrinkTitle, shrinkTitleSp, titleWidthOnShrinkPercent, titleWidthOnShrinkPercentSp, shrinkDescription, shrinkDescriptionSp, descriptionWidthOnShrinkPercent, descriptionWidthOnShrinkPercentSp, descriptionFontSize,
    titleMarginTop: marginTop, titleMarginBottom: marginBottom, titleMarginLeft: marginLeft, titleMarginRight: marginRight,
    titleMargin: margin, titleMarginTopSp: marginTopSp, titleMarginBottomSp: marginBottomSp, titleMarginLeftSp: marginLeftSp,
    titleMarginRightSp: marginRightSp, titleMarginSp: marginSp,
    titleMarginTopTablet: marginTopTablet, titleMarginBottomTablet: marginBottomTablet,
    titleMarginLeftTablet: marginLeftTablet, titleMarginRightTablet: marginRightTablet, titleMarginTablet: marginTablet,
    titleMarginTopSpSm: marginTopSpSm, titleMarginBottomSpSm: marginBottomSpSm, titleMarginLeftSpSm: marginLeftSpSm,
    titleMarginRightSpSm: marginRightSpSm, titleMarginSpSm: marginSpSm,
    descriptionMarginTop, descriptionMarginBottom, descriptionMarginLeft, descriptionMarginRight, descriptionMargin,
    descriptionMarginTopTablet, descriptionMarginBottomTablet, descriptionMarginLeftTablet, descriptionMarginRightTablet, descriptionMarginTablet,
    descriptionMarginTopSp, descriptionMarginBottomSp, descriptionMarginLeftSp, descriptionMarginRightSp, descriptionMarginSp,
    descriptionMarginTopSpSm, descriptionMarginBottomSpSm, descriptionMarginLeftSpSm, descriptionMarginRightSpSm, descriptionMarginSpSm,
  } = props;

  return (
    <h1>
      <div>
        <img
          css={css`
            width: 100% !important;
            @media screen and (max-width: 600px) {
              display: none !important;
            }
          `}
          src={imagePath}
          alt={alt}
        />
        <img
          css={css`
            width: 100% !important;
            display: none !important;
            @media screen and (max-width: 600px) {
              display: block !important;
            }
          `}
          src={imagePathSp}
          alt={alt}
        />
      </div>
      {(title || description) &&
        <div
          css={css`
            padding: 20px 24px 0;
            width: 100%;
            margin: 0 auto;

            @media screen and (max-width: 600px) {
              padding: 20px 8px 0;
            }
          `}
        >
          {title &&
            <div
              className="mincho"
              css={css`
                font-size: 26px !important;
                letter-spacing: .4em !important;
                ${shrinkTitle ? `width: ${titleWidthOnShrinkPercent ? `${titleWidthOnShrinkPercent}%` : "80%"} !important;` : "width: 100% !important;"}
                ${marginTop !== undefined ? `margin-top: ${marginTop}px !important;` : ""}
                ${marginBottom !== undefined ? `margin-bottom: ${marginBottom}px !important;` : ""}
                ${marginLeft !== undefined ? `margin-left: ${marginLeft}px !important;` : ""}
                ${marginRight !== undefined ? `margin-right: ${marginRight}px !important;` : ""}
                ${margin ? `margin: ${margin} !important;` : ""}

                @media screen and (max-width: 880px) {
                  ${marginTopTablet !== undefined ? `margin-top: ${marginTopTablet}px !important;` : ""}
                  ${marginBottomTablet !== undefined ? `margin-bottom: ${marginBottomTablet}px !important;` : ""}
                  ${marginLeftTablet !== undefined ? `margin-left: ${marginLeftTablet}px !important;` : ""}
                  ${marginRightTablet !== undefined ? `margin-right: ${marginRightTablet}px !important;` : ""}
                  ${marginTablet ? `margin: ${marginTablet} !important;` : ""}
                }

                @media screen and (max-width: 600px) {
                  font-size: 17px !important;
                  line-height: 1.6 !important;
                  margin-right: 10% !important;
                  letter-spacing: .3em !important;
                  ${shrinkTitleSp ? `width: ${titleWidthOnShrinkPercentSp ? `${titleWidthOnShrinkPercentSp}%` : "80%"} !important;` : "width: 100% !important;"}
                  ${marginTopSp !== undefined ? `margin-top: ${marginTopSp}px !important;` : ""}
                  ${marginBottomSp !== undefined ? `margin-bottom: ${marginBottomSp}px !important;` : ""}
                  ${marginLeftSp !== undefined ? `margin-left: ${marginLeftSp}px !important;` : ""}
                  ${marginRightSp !== undefined ? `margin-right: ${marginRightSp}px !important;` : ""}
                  ${marginSp ? `margin: ${marginSp} !important;` : ""}
                }

                @media screen and (max-width: 470px) {
                  ${marginTopSpSm !== undefined ? `margin-top: ${marginTopSpSm}px !important;` : ""}
                  ${marginBottomSpSm !== undefined ? `margin-bottom: ${marginBottomSpSm}px !important;` : ""}
                  ${marginLeftSpSm !== undefined ? `margin-left: ${marginLeftSpSm}px !important;` : ""}
                  ${marginRightSpSm !== undefined ? `margin-right: ${marginRightSpSm}px !important;` : ""}
                  ${marginSpSm ? `margin: ${marginSpSm} !important;` : ""}
                }
              `}
            >
              {title}
            </div>
          }
          {description &&
            <div
              css={css`
                font-size: ${descriptionFontSize ? `${descriptionFontSize}` : "14"}px !important;
                line-height: 2 !important;
                margin-top: 15px !important;
                ${shrinkDescription ? `width: ${descriptionWidthOnShrinkPercent ? `${descriptionWidthOnShrinkPercent}%` : "80%"} !important;` : "width: 100% !important;"}
                ${descriptionMarginTop !== undefined ? `margin-top: ${descriptionMarginTop}px !important;` : ""}
                ${descriptionMarginBottom !== undefined ? `margin-bottom: ${descriptionMarginBottom}px !important;` : ""}
                ${descriptionMarginLeft !== undefined ? `margin-left: ${descriptionMarginLeft}px !important;` : ""}
                ${descriptionMarginRight !== undefined ? `margin-right: ${descriptionMarginRight}px !important;` : ""}
                ${descriptionMargin ? `margin: ${descriptionMargin} !important;` : ""}

                @media screen and (max-width: 880px) {
                  ${descriptionMarginTopTablet !== undefined ? `margin-top: ${descriptionMarginTopTablet}px !important;` : ""}
                  ${descriptionMarginBottomTablet !== undefined ? `margin-bottom: ${descriptionMarginBottomTablet}px !important;` : ""}
                  ${descriptionMarginLeftTablet !== undefined ? `margin-left: ${descriptionMarginLeftTablet}px !important;` : ""}
                  ${descriptionMarginRightTablet !== undefined ? `margin-right: ${descriptionMarginRightTablet}px !important;` : ""}
                  ${descriptionMarginTablet ? `margin: ${descriptionMarginTablet} !important;` : ""}
                }

                @media screen and (max-width: 600px) {
                  line-height: 1.5 !important;
                  ${shrinkDescriptionSp ? `width: ${descriptionWidthOnShrinkPercentSp ? `${descriptionWidthOnShrinkPercentSp}%` : "80%"} !important;` : "width: 100% !important;"}
                  ${descriptionMarginTopSp !== undefined ? `margin-top: ${descriptionMarginTopSp}px !important;` : "margin-top: 8px !important;"}
                  ${descriptionMarginBottomSp !== undefined ? `margin-bottom: ${descriptionMarginBottomSp}px !important;` : ""}
                  ${descriptionMarginLeftSp !== undefined ? `margin-left: ${descriptionMarginLeftSp}px !important;` : ""}
                  ${descriptionMarginRightSp !== undefined ? `margin-right: ${descriptionMarginRightSp}px !important;` : ""}
                  ${descriptionMarginSp ? `margin: ${descriptionMarginSp} !important;` : ""}
                }

                @media screen and (max-width: 470px) {
                  ${descriptionMarginTopSpSm !== undefined ? `margin-top: ${descriptionMarginTopSpSm}px !important;` : ""}
                  ${descriptionMarginBottomSpSm !== undefined ? `margin-bottom: ${descriptionMarginBottomSpSm}px !important;` : ""}
                  ${descriptionMarginLeftSpSm !== undefined ? `margin-left: ${descriptionMarginLeftSpSm}px !important;` : ""}
                  ${descriptionMarginRightSpSm !== undefined ? `margin-right: ${descriptionMarginRightSpSm}px !important;` : ""}
                  ${descriptionMarginSpSm ? `margin: ${descriptionMarginSpSm} !important;` : ""}
                }
              `}
            >
              {description}
            </div>
          }
        </div>
      }
    </h1>
  );
};
