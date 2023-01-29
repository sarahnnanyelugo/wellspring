const {
  RefObject,
  useState,
  useEffect,
  FC,
  useRef,
  PropsWithChildren,
  CSSProperties,
  StrictMode,
} = React;
const { createRoot } = ReactDOM;

function useElementOnScreen(ref: RefObject<Element>, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

const AnimateIn: FC<
  PropsWithChildren<{ from: CSSProperties, to: CSSProperties }>
> = ({ from, to, children }) => {
  const ref = useRef < HTMLDivElement > null;
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = {
    transition: "600ms ease-in-out",
  };
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...to,
            }
          : {
              ...defaultStyles,
              ...from,
            }
      }
    >
      {children}
    </div>
  );
};

const FadeIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {children}
  </AnimateIn>
);

const FadeUp: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
  >
    {children}
  </AnimateIn>
);

const ScaleIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn from={{ scale: "0" }} to={{ scale: "1" }}>
    {children}
  </AnimateIn>
);

const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn,
};

function App() {
  return (
    <div>
      <Animate.FadeIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.FadeIn>
      <Animate.FadeUp>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.ScaleIn>
      <Animate.FadeIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.FadeIn>
      <Animate.FadeUp>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.ScaleIn>
      <Animate.FadeIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.FadeIn>
      <Animate.FadeUp>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.ScaleIn>
      <Animate.FadeIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.FadeIn>
      <Animate.FadeUp>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.ScaleIn>
      <Animate.FadeIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.FadeIn>
      <Animate.FadeUp>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.ScaleIn>
      <Animate.FadeIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.FadeIn>
      <Animate.FadeUp>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi
          libero ut, tenetur fugit rerum distinctio non recusandae expedita
          ipsum!
        </p>
      </Animate.ScaleIn>
    </div>
  );
}
