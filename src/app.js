/*
 * Copyright Jorge Alonso Toro Hoyos (jolthgs@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
const logger = require("./logger");
const express = require("express");

const errorMiddleware = require("./middleware/error");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(errorMiddleware.errorHandler404);
app.use(errorMiddleware.errorHandler500);

app.listen(PORT, () => {
  logger.info(`The storage API started in port ${PORT}`);
});
