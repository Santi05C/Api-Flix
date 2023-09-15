import Video from "../models/Video.js";
import Category from "../models/category.js";

export const getVideo = async (req, res, next) => {
  try {
    const videos = await Video.find({ videosId: req.params.id });
    res.status(200).send(videos);
  } catch (err) {
    next(err);
  }
};

export const getcategory = async (req, res, next) => {
  try {
    const category = await Category.find({ categoryId: req.params.id });
    res.status(200).send(category);
  } catch (err) {
    next(err);
  }
};

export const addVideo = async (req, res, next) => {
  const categorylId = req.params.categoryid;
  const newVideo = new Video(req.body);

  try {
    const savedVideo = await newVideo.save();
    try {
      await Category.findByIdAndUpdate(categorylId, {
        $push: { videos: savedVideo },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedVideo);
  } catch (error) {
    next(error);
  }
};

export const addcategory = async (req, res, next) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    next(error);
  }
};
export const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { $push: req.body },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    next(err);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).send("Category has been deleted!");
  } catch (err) {
    next(err);
  }
};
