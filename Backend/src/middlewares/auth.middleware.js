import jwt from "jsonwebtoken";

const Authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return res
        .status(401)
        .json({ success: false, message: "Authorization token required..." });

    const [type, token] = authHeader.split(" ");
    if (type !== "Bearer" || !token)
      return res
        .status(401)
        .json({ success: false, message: "Unauthorised..." });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error in Authentication(): ", error);
    return res
      .status(401)
      .json({ success: false, message: "Invalid or Expired token..." });
  }
};

export default Authenticate;
