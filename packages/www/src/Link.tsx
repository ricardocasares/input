import React, { FunctionComponent } from "react";
import clsx from "clsx";
import { withRouter, WithRouterProps } from "next/router";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@material-ui/core/Link";

interface AppLinkProps extends MuiLinkProps, WithRouterProps {
  activeClassName?: string;
}

const AnchorLink: FunctionComponent<NextLinkProps> = (props, ref) => {
  const { as, href, prefetch, ...rest } = props;

  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...rest} />
    </NextLink>
  );
};

const NextComposed = React.forwardRef(AnchorLink);

const AppLink: FunctionComponent<AppLinkProps> = ({
  activeClassName = "active",
  router,
  className: classNameProps,
  innerRef,
  ...props
}) => {
  const className = clsx(classNameProps, {
    [activeClassName]:
      router && router.pathname === props.href && activeClassName
  });

  return (
    // @ts-ignore
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      {...props}
    />
  );
};

const RouterLink = withRouter(AppLink);

export const Link = React.forwardRef((props, ref) => (
  <RouterLink {...props} innerRef={ref} />
));
