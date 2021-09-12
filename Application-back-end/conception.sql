DROP DATABASE IF EXISTS conception;

CREATE DATABASE IF NOT EXISTS conception;
USE conception;

-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : Dim 12 sep. 2021 à 23:06
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `conception`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE `clients` (
  `ID` int(11) NOT NULL,
  `NUMERO` bigint(20) NOT NULL,
  `CREATED_AT` datetime DEFAULT NULL,
  `UPDATED_AT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`ID`, `NUMERO`, `CREATED_AT`, `UPDATED_AT`) VALUES
(1, 1414, '2021-09-12 22:54:08', '2021-09-12 22:54:08');

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

CREATE TABLE `commandes` (
  `ID` int(11) NOT NULL,
  `ID_REPAS` int(11) NOT NULL,
  `ID_CLIENTS` int(11) NOT NULL,
  `QTE` bigint(20) NOT NULL,
  `ETAT` tinyint(4) NOT NULL,
  `EMBALLAGE` tinyint(4) DEFAULT NULL,
  `SERVIETTE` tinyint(4) DEFAULT NULL,
  `COUVERT` tinyint(4) DEFAULT NULL,
  `CREATED_AT` datetime DEFAULT NULL,
  `UPDATED_AT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `commandes`
--

INSERT INTO `commandes` (`ID`, `ID_REPAS`, `ID_CLIENTS`, `QTE`, `ETAT`, `EMBALLAGE`, `SERVIETTE`, `COUVERT`, `CREATED_AT`, `UPDATED_AT`) VALUES
(1, 1, 1, 1, 0, 1, 1, 0, '2021-09-12 19:58:52', '2021-09-12 19:58:52'),
(2, 1, 1, 2, 0, 1, 1, 0, '2021-09-12 20:05:07', '2021-09-12 20:05:07'),
(3, 3, 1, 1, 0, 0, 0, 1, '2021-09-12 20:07:24', '2021-09-12 20:07:24');

-- --------------------------------------------------------

--
-- Structure de la table `ingredients`
--

CREATE TABLE `ingredients` (
  `ID` int(11) NOT NULL,
  `ID_REPAS` int(11) NOT NULL,
  `NOM_INGREDIENTS` text NOT NULL,
  `PRIX_INGREDIENTS` text DEFAULT NULL,
  `QTE_ILAINA_INGREDIENTS` text NOT NULL,
  `CREATED_AT` datetime DEFAULT NULL,
  `UPDATED_AT` datetime DEFAULT NULL,
  `STOCK` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ingredients`
--

INSERT INTO `ingredients` (`ID`, `ID_REPAS`, `NOM_INGREDIENTS`, `PRIX_INGREDIENTS`, `QTE_ILAINA_INGREDIENTS`, `CREATED_AT`, `UPDATED_AT`, `STOCK`) VALUES
(1, 1, 'pain burger', '400', '1', '2021-09-12 05:56:58', '2021-09-12 05:56:58', 50),
(2, 1, 'tomates', '100', '2', '2021-09-12 05:57:27', '2021-09-12 05:57:27', 20),
(3, 1, 'oeuf', '500', '1', '2021-09-12 06:42:49', '2021-09-12 06:42:49', 15),
(4, 1, 'salade', '100', '1', '2021-09-12 06:43:24', '2021-09-12 06:43:24', 15),
(5, 1, 'oignon', '100', '1', '2021-09-12 06:44:13', '2021-09-12 06:44:13', 40),
(6, 1, 'mortadelle', '700', '0.5', '2021-09-12 06:46:58', '2021-09-12 06:46:58', 100),
(7, 2, 'pommes de terre', '150', '0.2', '2021-09-12 06:49:21', '2021-09-12 06:49:21', 1000),
(8, 3, 'lait', '200', '0.2', '2021-09-12 06:53:10', '2021-09-12 06:53:10', 5),
(9, 3, 'sucre', '50', '0.2', '2021-09-12 06:57:13', '2021-09-12 06:57:13', 5),
(10, 3, 'yaourt nature', '50', '0.1', '2021-09-12 06:58:51', '2021-09-12 06:58:51', 5);

-- --------------------------------------------------------

--
-- Structure de la table `repas`
--

CREATE TABLE `repas` (
  `ID` int(11) NOT NULL,
  `NOM_REPAS` text NOT NULL,
  `PRIX` char(32) DEFAULT NULL,
  `CREATED_AT` datetime DEFAULT NULL,
  `UPDATED_AT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `repas`
--

INSERT INTO `repas` (`ID`, `NOM_REPAS`, `PRIX`, `CREATED_AT`, `UPDATED_AT`) VALUES
(1, 'Hamburger', '3000', '2021-09-12 05:44:49', '2021-09-12 05:44:49'),
(2, 'Frite', '1000', '2021-09-12 06:47:30', '2021-09-12 06:47:30'),
(3, 'Yaourt', '500', '2021-09-12 06:51:05', '2021-09-12 06:51:05');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `I_FK_COMMANDES_REPAS` (`ID_REPAS`),
  ADD KEY `I_FK_COMMANDES_CLIENTS` (`ID_CLIENTS`);

--
-- Index pour la table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `I_FK_INGREDIENTS_REPAS` (`ID_REPAS`);

--
-- Index pour la table `repas`
--
ALTER TABLE `repas`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `clients`
--
ALTER TABLE `clients`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `commandes`
--
ALTER TABLE `commandes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `repas`
--
ALTER TABLE `repas`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `FK_COMMANDES_CLIENTS` FOREIGN KEY (`ID_CLIENTS`) REFERENCES `clients` (`ID`),
  ADD CONSTRAINT `FK_COMMANDES_REPAS` FOREIGN KEY (`ID_REPAS`) REFERENCES `repas` (`ID`);

--
-- Contraintes pour la table `ingredients`
--
ALTER TABLE `ingredients`
  ADD CONSTRAINT `FK_INGREDIENTS_REPAS` FOREIGN KEY (`ID_REPAS`) REFERENCES `repas` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
