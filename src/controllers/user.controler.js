




import {asyncHandler} from '../utils/asyncHandler.js';


const registerUser = asyncHandler( async (req, res) =>{
    const { fullName, email, userName, password } = req.body;
  console.log("email:", email);

  if (
    [fullName, email, userName, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }
  // check existing user(email or username)
  const existingUser = await User.findOne({
    $or: [{ email }, { userName }],
  });
 // if user alrady present then throw error else move to next stap
  if (existingUser) {
    throw new ApiError(
      409,
      "user already exists with this email or username"
    );
  }
   // add avatar & coverImage
  const avatarLocalPath = req.fields?.avatar[0]?.path;
  const coverImageLocalPath = req.fields?.coverImage[0]?.path;
  // if avatar is not present then throw error
  if (!avatarLocalPath) {
    throw new ApiError(400, "avatar image is required");
  }
  // wait for upload to cloudinary(avatar & coverImage)
  const avatar = await uploadToCloudinary(avatarLocalPath);
  const coverImage = await uploadToCloudinary(coverImageLocalPath);
  // if avatar is not present then throw error
  if (!avatar) {
    throw new ApiError(400, "avatar image is required");
  }
   // create user object & save to db
  const user = await User.creat({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    userName: userName.toLowerCase(),
  });
  // get created user from db & exclude password & refresh token
  const createdUsre = await use
    .findById(user._Id)
    .select("-password -refreshToken");
     // if user is not created then throw error
  if (!createdUsre) {
    throw new ApiError(500, "somthing went wrong ragister the user");
  }
   // return success response
  return res
    .status(201)
    .json(new ApiResponce(200, createdUsre, "User registered successfully"));


})

export {registerUser}