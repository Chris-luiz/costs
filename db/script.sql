SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `projetos` (
  `id` int NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `budget` float NOT NULL,
  `category` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `projetos` (`id`, `name`, `budget`, `category`) VALUES
(1, 'projeto 1', 2000, 'DevOps');

CREATE TABLE `services` (
  `id` int NOT NULL,
  `projeto_pk` int NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cost` float NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `services` (`id`, `projeto_pk`, `name`, `cost`, `description`) VALUES
(1, 1, 'Algum Servico', 500, 'Descricao generica'),
(3, 1, 'Algum Servico2', 500, 'Descricao generica 2');

ALTER TABLE `projetos`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projeto_pk` (`projeto_pk`);

ALTER TABLE `projetos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `services`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `services`
  ADD CONSTRAINT `services_ibfk_1` FOREIGN KEY (`projeto_pk`) REFERENCES `projetos` (`id`) ON DELETE CASCADE;
COMMIT;
