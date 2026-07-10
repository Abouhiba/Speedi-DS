import { Component3 } from './Component3.jsx';
import { Price } from './Price.jsx';
import { PriceTag } from './PriceTag.jsx';
import { Tag } from './Tag.jsx';
import { TitleProducts } from './TitleProducts.jsx';

// figma node: 4:16900 Product (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "typ=" + __venc(p.typ);

export function Product(_p = {}) {
  const props = { ..._p, tag: _p.tag ?? true, typ: _p.typ ?? "product1 tag", showPriceTag: _p.showPriceTag ?? true, showTag: _p.showTag ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 117,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 135,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 117,
          height: 135,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0 0 0 1px rgb(211,211,211)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div className="fig-asset-d29b87e8ad6cc7a3-571c9b77" style={{
            position: "relative",
            width: 114,
            height: 131,
            flexShrink: 0,
          }} />
        </div>
        {props.showPriceTag && (
        <div style={{ position: "absolute", left: 5, top: 7 }}>{props.icon1 ?? <PriceTag />}</div>
        )}
        <div style={{ position: "absolute", left: 5, top: 101 }}>{props.icon2 ?? <Component3 stats={"no item"} />}</div>
      </div>
      {props.showTag && (
      <Tag
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"red"}
      />
      )}
      <Price style={{ position: "relative", width: 110, flexShrink: 0 }} />
      <TitleProducts
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        property1={"default"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 117,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 135,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 117,
          height: 135,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0 0 0 1px rgb(211,211,211)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div className="fig-asset-d29b87e8ad6cc7a3-571c9b77" style={{
            position: "relative",
            width: 114,
            height: 131,
            flexShrink: 0,
          }} />
        </div>
        <div style={{ position: "absolute", left: 5, top: 6 }}>{props.icon1 ?? <PriceTag />}</div>
        <div style={{ position: "absolute", left: 5, top: 101 }}>{props.icon2 ?? <Component3 stats={"no item"} />}</div>
      </div>
      <Price
        style={{ position: "relative", width: 110, flexShrink: 0 }}
        wasPrices={false}
      />
      <TitleProducts
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        property1={"default"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 135,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 117,
          height: 135,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0 0 0 1px rgb(211,211,211)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div className="fig-asset-d29b87e8ad6cc7a3-571c9b77" style={{
            position: "relative",
            width: 114,
            height: 131,
            flexShrink: 0,
          }} />
        </div>
        <Component3
          style={{
            position: "absolute",
            left: 5,
            top: 101,
            width: 107,
            height: 24,
          }}
          stats={"add one"}
        />
      </div>
      <Tag
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        type={"greeen"}
      />
      <Price
        style={{ position: "relative", width: 110, flexShrink: 0 }}
        wasPrices={false}
      />
      <TitleProducts
        style={{
          position: "relative",
          height: 33,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        changeText={"علي كافيه قهوة  1 كريمي ، 20 ...."}
        property1={"default"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 117,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 135,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 117,
          height: 135,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "0 0 0 1px rgb(211,211,211)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div className="fig-asset-d29b87e8ad6cc7a3-571c9b77" style={{
            position: "relative",
            width: 114,
            height: 131,
            flexShrink: 0,
          }} />
        </div>
        <div style={{ position: "absolute", left: 9, top: 8 }}>{props.icon1 ?? <PriceTag />}</div>
        <Component3
          style={{
            position: "absolute",
            left: 5,
            top: 101,
            width: 107,
            height: 24,
          }}
          stats={"add next"}
        />
      </div>
      <Price style={{ position: "relative", width: 110, flexShrink: 0 }} />
      <TitleProducts
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        property1={"default"}
      />
    </div>
  );
  const __impls = {
    // figma: typ=typ4
    "typ=typ4": __body0,
    // figma: typ=product2
    "typ=product2": __body1,
    // figma: typ=product1
    "typ=product1": __body2,
    // figma: typ=product1 tag
    "typ=product1 tag": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default Product;
