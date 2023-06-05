import { styled } from "styled-components";

const StyledCard = styled.div`
  width: 312px;
  height: 478px;
  .name {
    font-weight: 600;
    font-size: 16px;
    color: #000;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .category {
    font-weight: 400;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
  }
  .price {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #000;
  }
  .pic {
    background-image: ${(props) => `url(${props.item})`};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 400px;
    position: relative;
  }
  .tag {
    width: 52px;
    height: 24px;
    position: absolute;
    top: 10%;
    left: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CardSub = ({
  bgColor,
  item,
  name,
  category,
  price,
  tag,
  ...rest
}) => {
  return (
    <StyledCard {...rest}>
      <div className="pic" item={item} bgColor={bgColor}>
        <div className="tag" style={{background: `${bgColor}`}}>{tag}</div>
      </div>
      <p className="name">{name}</p>
      <div className="bottom">
        <p className="category">{category}</p>
        <p className="price">${price}</p>
      </div>
    </StyledCard>
  );
};
